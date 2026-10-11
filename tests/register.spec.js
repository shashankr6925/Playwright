import {test, expect} from '@playwright/test'

test("register", async({page})=>{

    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('//input[@placeholder="First Name"]').pressSequentially('SHASHANK');
    await page.locator('//input[@placeholder="Last Name"]').fill('R');
    await page.locator('//textarea[@ng-model="Adress"]').fill ('Bangalore');
    await page.locator('//input[@ng-model="EmailAdress"]').fill('shashank@gmail.com');  
    await page.locator('//input[@ng-model="Phone"]').fill('1234567891');
    await page.locator('//input[@value="Male"]').check();
    await page.locator('//input[@value="Cricket"]').click();
    await page.locator('//input[@value="Movies"]').click();
    await page.locator('//div[@id="msdd"]').click();
    await page.locator('//li[@class="ng-scope"][8]').click();
    
})