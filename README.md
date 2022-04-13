This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

Fire us Visual Studio Code and connect to the repo

```bash
npm run dev
## or
## yarn dev
```
## Info for Me
"git fetch" (this will fetch metadata from github describing any new updates)
"git diff main origin/main" (to see the difference between your local main and github main)
if there are differences, then
"git switch main" (to switch to the main branch)
"git pull" (to update your local main with changes from github main)
"git switch <your  branch>" (switch back to your new branch)
"git merge main" (this merges the changes from your updated main into your new branch)

At this point, your local branch should now be on the same version of main as on github. The exception will be where we both are updating the same file(s) and a merge conflict occurs. I'll leave that chat for another time.

Code formatting in VSC
 alt shift F to format code

ctrl . to inport missing things like calllink components

ctrl shift p - import organise imports

ctrl p - find file eaily in explorer


&#8804;  less than equal to
&apos; apostrophe
&quot; quotes 
  
  
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

## The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel
When a build fails (usually due to a quote or other character)

in Vercel.committed
look at deployments
3 dots and inspect build
  
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

  ## MongoDB
  MONGO DB
  
  Mongo DB
Here's the mongodb tools.
In the bin folder you'll see 3 cmd scripts. They a fairly simple commands, have a dig around.

bore_import.cmd will import the bore.csv in the same location. Not a bad idea to backup the db before & after an import with bore_dump.cmd.
None of these files have the password entered, which they'll need.
Head into the Environment Variables page under Settings in the project on Vercel. You'll find the password in the MONGODB_URI variable. This is the full URI to connect to the db, i.e. mongodb+srv://<username>:<password>@<server>/<database>.

The import csv has to have the exact same column headings in the same order as bore.csv, any deviation will break the import.

More info here: https://docs.mongodb.com/database-tools/
