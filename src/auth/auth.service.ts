import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApplicationsService } from '../applications/applications.service';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class JwtAuthGuard extends AuthGuard('Bearer') {
    constructor(private applicationsService: ApplicationsService)
    {
      super();
    }

    // constructor(private readonly addressService: AddressService) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      const apiToken = request.headers['authorization'];
  
      console.log(apiToken)
    
      console.log(this.applicationsService);

      if (!apiToken) {
        throw new UnauthorizedException('API token is missing');
      }

      const application = await this.applicationsService.findByToken(apiToken);
  
      if (!application) {
        throw new UnauthorizedException('Invalid API token');
      }
  
      return true;
    }
  }
