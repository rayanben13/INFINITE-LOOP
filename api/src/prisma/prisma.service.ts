import {
    Injectable,
    OnModuleDestroy,
    OnModuleInit,
} from '@nestjs/common';

import { PrismaClient } from '../generated/prisma/client.js';
import { adapter } from './prisma.js';

@Injectable()
export class PrismaService
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy {
    constructor() {
        super({ adapter });
    }

    async onModuleInit() {
        console.log("from serv");
        await this.$connect();
        console.log('Database connected successfully');
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}