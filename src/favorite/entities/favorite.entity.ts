import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('favorite')
export class Favorite {
  @PrimaryColumn()
  rowpointer: string;

  @Column()
  userNo: string;

  @Column()
  files: string;
}
