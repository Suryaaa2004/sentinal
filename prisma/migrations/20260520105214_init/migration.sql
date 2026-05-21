/*
  Warnings:

  - You are about to drop the column `assetType` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `discoveredAt` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `organizationName` on the `Organization` table. All the data in the column will be lost.
  - Added the required column `domain` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Organization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Asset" DROP COLUMN "assetType",
DROP COLUMN "discoveredAt",
DROP COLUMN "status",
DROP COLUMN "value",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "domain" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "organizationName",
ADD COLUMN     "name" TEXT NOT NULL;
