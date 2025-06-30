import { sum } from "../sum";

test("SUM function should give sum",()=>{
    const result=sum(3,4);
    expect(result).toBe(7);
})