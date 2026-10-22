import mysql from "mysql2/promise";

// Keep in sync with db/migrations/001_create_partner_applications.sql.
const CREATE_TABLE = `
CREATE TABLE IF NOT EXISTS partner_applications (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  program_type VARCHAR(16) NOT NULL,
  full_name VARCHAR(160) NOT NULL,
  first_name VARCHAR(60) NULL,
  last_name VARCHAR(60) NULL,
  email VARCHAR(254) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  city VARCHAR(80) NOT NULL,
  company_name VARCHAR(120) NULL,
  role VARCHAR(80) NULL,
  company_type VARCHAR(60) NULL,
  team_size VARCHAR(20) NULL,
  client_industries JSON NULL,
  crm_experience VARCHAR(60) NULL,
  other_crm_partner VARCHAR(40) NULL,
  profile_type VARCHAR(60) NULL,
  promotion_channels JSON NULL,
  audience_reach VARCHAR(40) NULL,
  website VARCHAR(300) NULL,
  message TEXT NULL,
  consent TINYINT(1) NOT NULL DEFAULT 0,
  ip VARCHAR(64) NULL,
  user_agent VARCHAR(512) NULL,
  utm_source VARCHAR(120) NULL,
  utm_medium VARCHAR(120) NULL,
  utm_campaign VARCHAR(160) NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'new',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_partner_applications_program_status (program_type, status),
  KEY idx_partner_applications_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`;

let pool;
let tableReady;

function getPool() {
  if (!process.env.DATABASE_URL) return null;
  pool ??= mysql.createPool({
    uri: process.env.DATABASE_URL,
    connectionLimit: 3,
    connectTimeout: 8000,
  });
  return pool;
}

export function isDatabaseConfigured() {
  return Boolean(process.env.DATABASE_URL);
}

/** Inserts one application and returns its id. Throws if the database is unavailable. */
export async function savePartnerApplication(row) {
  const db = getPool();
  if (!db) throw new Error("DATABASE_URL is not set");
  tableReady ??= db.query(CREATE_TABLE).catch((error) => {
    tableReady = undefined;
    throw error;
  });
  await tableReady;

  const [result] = await db.query("INSERT INTO partner_applications SET ?", [
    {
      ...row,
      client_industries: row.client_industries ? JSON.stringify(row.client_industries) : null,
      promotion_channels: row.promotion_channels ? JSON.stringify(row.promotion_channels) : null,
      status: "new",
    },
  ]);
  return result.insertId;
}
