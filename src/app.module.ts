import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MediaModule } from './media/media.module';
import * as mongoose from 'mongoose';

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), MediaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
