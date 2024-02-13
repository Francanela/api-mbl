import { BadRequestException, CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { UsersService } from './users/users.service';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CustomInterceptors implements NestInterceptor {
    @Inject(UsersService)
    private readonly usersService: UsersService;

    readonly PARAM_NAME = 'userId';

    async intercept<T>(context: ExecutionContext, next: CallHandler): Promise<Observable<T>> {
        const req = context.switchToHttp().getRequest();
        if (req.params[this.PARAM_NAME]) {
            let model = await this.usersService.findOne(+req.params[this.PARAM_NAME]);
            if (!model) return throwError(() => new BadRequestException());
            return next.handle();
        }
        else return next.handle();
    }
}