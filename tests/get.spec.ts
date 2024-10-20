const {test,expect} =require ('@playwright/test')

test('GEt call',async ({request})=>{
   const response = await request.get('https://jsonplaceholder.typicode.com/posts')
   console.log(await response.json())
expect(response.status()).toBe(200)

})