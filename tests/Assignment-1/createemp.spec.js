import { test, expect } from '@playwright/test';

import details from "../../testdata/orangehrm_testdata/userdetails.json"
import { faker } from '@faker-js/faker';
const emp = {
    emp1: {
        firstname: "SHASHANK",
        lastname: "R"
    },

    emp2: {
        firstname: "Alex",
        lastname: "A"
    },

       emp3: {
        firstname: "Adam",
        lastname: "B"
    }
};

for (const empname in emp) {

    test(`Add employee ${empname}`, async ({ page }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await page.getByRole('textbox', { name: 'Username' }).fill(details.login.valid.username);
        await page.getByRole('textbox', { name: 'Password' }).fill(details.login.valid.password);
        await page.getByRole('button', { name: 'Login' }).click();

        await page.getByRole('link', { name: 'PIM' }).click();
        await page.getByRole('link', { name: 'Add Employee' }).click();

        await page.getByRole('textbox', { name: 'First Name' }).fill(emp[empname].firstname);
        await page.getByRole('textbox', { name: 'Last Name' }).fill(emp[empname].lastname);

        await page.getByRole('textbox').nth(4).fill(faker.string.numeric(7));

        await page.getByRole('button', { name: 'Save' }).click();

        await expect(page.getByText('Successfully Saved')).toBeVisible();

    });
}
