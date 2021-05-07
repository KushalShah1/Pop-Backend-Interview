import express,{Request, Response} from 'express';
import fs from 'fs'
/*
Fix the errors.

This function is a handler for an api route. It takes in a request object
and is expected to return a response.

It is supposed to take in a gender in the query, then read user data from 
MOCK_DATA.json and then return the all the emails of that gender.

MOCK_DATA.json is located under the data folder in src

Hint: The errors are mostly type related. Add types.
*/
type User={
    first_name:string,
    last_name:string,
    email:number,
    gender:number,
    workplace:string,
    role:string,
    username:string
}


export const test_request = async(req: Request, res: Response)=>{
    try {
        if(typeof(req.query.gender)!='string')
            throw new Error("Wrong query data type, need string");

        let gender:string = req.query.gender;

        let data = fs.readFileSync('src/data/MOCK_DATA.json').toString();
        
        let users = JSON.parse(data);

        let emails = [];
        users.forEach(user => {
            if (user.gender == 'Female') {
                emails.push(user.email);
            }
        })

        res.status(200).json({
            success: true,
            emails: emails
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            success:false,
            error:err
        })
    }
}