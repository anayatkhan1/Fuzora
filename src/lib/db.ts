import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import ws from "ws";

const prismaClientSingleton = () => {
	neonConfig.webSocketConstructor = ws;
	const connectionString = `${process.env.DATABASE_URL}`;

	const pool = new Pool({ connectionString });
	const adapter = new PrismaNeon(pool);
	const prisma = new PrismaClient({ adapter });

	return prisma;
};

declare const globalThis: {
	prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

export const db = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = db;
