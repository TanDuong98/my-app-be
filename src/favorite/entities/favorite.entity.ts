import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('favorite')
export class Favorite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userNo: string;

  @Column()
  files: string;
}
