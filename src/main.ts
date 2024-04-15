import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
        .setTitle("CiStudy Server")
        .setDescription("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhN2JiNTU4Zi04YTBjLTQzMGEtYTc0MS05ODZhNTBhZTE0NzMiLCJ0eXBlIjoiUmVmcmVzaCIsImlhdCI6MTcwNzQ2MjUxNSwiZXhwIjoxNzEwMDU0NTE1fQ.SsZFDKCHjn7i06L_j5WSkTEdGUu0tQ0txYyyl3l5oCc")
        .setVersion("1.0")
        .addBearerAuth()    
        .build()
    const document = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup("/", app, document, {
        swaggerOptions: { defaultModelsExpandDepth: -1 },
    })


  await app.listen(3000);
}
bootstrap();
