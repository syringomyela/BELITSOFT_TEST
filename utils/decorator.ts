import { test } from "@playwright/test";

export function step(stepName?: string) 
{
  return function (target: any,context: ClassMethodDecoratorContext) 
  {
    return function (this, ...args: any[]) 
    {
      return test.step(String(context.name), async () => 
        {
        return await target.apply(this, args);;
      });
    };
  };
}