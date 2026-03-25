import { ConflictException, Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from 'src/generated/prisma/client';

@Injectable()
export class StoreService {
  constructor(private prisma: PrismaService) {}

  async create(createStoreDto: CreateStoreDto) {
    try {
      return await this.prisma.store.create({
        data: {
          ...createStoreDto,
        },
        omit: {
          id: true,
          updated_at: true,
          created_at: true,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          const cause = (e.meta?.driverAdapterError as any)?.cause;
          const fields =
            (e.meta?.constraint as any)?.fields ||
            cause?.constraint?.fields ||
            [];

          throw new ConflictException(
            `Já existe uma loja com este ${fields.join(', ')}`,
          );
        }
      }
    }
  }

  async findAll() {
    return await this.prisma.store.findMany({
      orderBy: {
        created_at: 'desc',
      },
      omit: {
        id: true,
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} store`;
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
