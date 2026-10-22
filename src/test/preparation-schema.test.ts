import { expect, it } from "vitest";
import { preparationSchema } from "@/lib/preparation-schema";
const input = {needs:"I need to plan a home repair.",employment:"Salaried",amount:50000,income:40000,commitments:15000,consent:true};
it("requires consent before sharing financial circumstances with AI",()=>{expect(preparationSchema.safeParse(input).success).toBe(true);expect(preparationSchema.safeParse({...input,consent:false}).success).toBe(false);});
it("bounds financial input and rejects additional personal identifiers",()=>{expect(preparationSchema.safeParse({...input,income:-1}).success).toBe(false);expect(preparationSchema.safeParse({...input,pan:"ABCDE1234F"}).success).toBe(false);});