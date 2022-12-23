import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import {randomUUID} from 'node:crypto'
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly prisma: PrismaService) {}
  
  @Post()
  async create(@Body() body : CreateNotificationBody) {

    const {category, content, recipientId} = body
  }
}
