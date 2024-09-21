import { sum } from "../sum";
test("this function should check the sum of two number",()=>{
    const result = sum(3,4);
    
    //assertion 
    expect(result).toBe(7);

})