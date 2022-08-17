/*
 Navicat Premium Data Transfer

 Source Server         : postgresql
 Source Server Type    : PostgreSQL
 Source Server Version : 140002
 Source Host           : localhost:5432
 Source Catalog        : app_nodedb
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 140002
 File Encoding         : 65001

 Date: 17/08/2022 10:25:23
*/


-- ----------------------------
-- Sequence structure for id_emp_assg
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."id_emp_assg";
CREATE SEQUENCE "public"."id_emp_assg" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for id_employe
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."id_employe";
CREATE SEQUENCE "public"."id_employe" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for id_team
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."id_team";
CREATE SEQUENCE "public"."id_team" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Table structure for employee
-- ----------------------------
DROP TABLE IF EXISTS "public"."employee";
CREATE TABLE "public"."employee" (
  "id" int4 NOT NULL DEFAULT nextval('id_employe'::regclass),
  "name" varchar(50) COLLATE "pg_catalog"."default",
  "date_of_joining" timestamp(6),
  "designation" varchar(25) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "gender" varchar(10) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "email" varchar(50) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "bio" varchar(500) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying
)
;

-- ----------------------------
-- Table structure for employee_assignment
-- ----------------------------
DROP TABLE IF EXISTS "public"."employee_assignment";
CREATE TABLE "public"."employee_assignment" (
  "id" int4 NOT NULL DEFAULT nextval('id_emp_assg'::regclass),
  "employe_id" int4,
  "team_id" int4
)
;

-- ----------------------------
-- Table structure for team
-- ----------------------------
DROP TABLE IF EXISTS "public"."team";
CREATE TABLE "public"."team" (
  "id" int4 NOT NULL DEFAULT nextval('id_team'::regclass),
  "name" varchar(50) COLLATE "pg_catalog"."default",
  "email" varchar(50) COLLATE "pg_catalog"."default",
  "description" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."id_emp_assg"
OWNED BY "public"."employee_assignment"."id";
SELECT setval('"public"."id_emp_assg"', 7, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."id_employe"
OWNED BY "public"."employee"."id";
SELECT setval('"public"."id_employe"', 4, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."id_team"
OWNED BY "public"."team"."id";
SELECT setval('"public"."id_team"', 3, true);

-- ----------------------------
-- Primary Key structure for table employee
-- ----------------------------
ALTER TABLE "public"."employee" ADD CONSTRAINT "employee_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table employee_assignment
-- ----------------------------
ALTER TABLE "public"."employee_assignment" ADD CONSTRAINT "employee_assignment_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table team
-- ----------------------------
ALTER TABLE "public"."team" ADD CONSTRAINT "team_pkey" PRIMARY KEY ("id");
