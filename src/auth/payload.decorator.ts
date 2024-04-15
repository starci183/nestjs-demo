import { ExecutionContext, createParamDecorator } from "@nestjs/common"

export const Payload = createParamDecorator((_, ctx: ExecutionContext) : any => {
    const request = ctx.switchToHttp().getRequest()
    return request.user
})

export const Cuong = createParamDecorator((_, ctx: ExecutionContext) : any => {
    const request = ctx.switchToHttp().getRequest()
    return request.user.cuong
})