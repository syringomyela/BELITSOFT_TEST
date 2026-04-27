import { test } from "@playwright/test";

export function step(stepName?: string) 
{
  return function (target: any,context: ClassMethodDecoratorContext) 
  {
    return function (this, ...args: any[]) 
    {
      let name = stepName || String(context.name);
      name = name.replace(/\$(\d+)/g, (_, i) => {
        return args[i] ?? "";
      });
      return test.step(name, async () => 
        {
        return await target.apply(this, args);;
      });
    };
  };
}