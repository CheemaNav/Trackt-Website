-- Partner program applications from /partners/reseller-partner-program
-- and /partners/affiliate-partner-program (MySQL 5.7+ / MariaDB 10.2+).
-- lib/partner-db.js runs the same statement on first use, so running this
-- by hand (for example in phpMyAdmin) is optional.

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
