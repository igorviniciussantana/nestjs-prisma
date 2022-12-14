import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {randomUUID} from 'node:crypto'

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany()
  }

  @Post()
  async create(@Body() body : any) {

    const {category, content, recipientId} = body

    return await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId
      }
    })
  }
}
