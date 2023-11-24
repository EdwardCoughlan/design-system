#!/usr/bin/env node
import { execSync } from "child_process"
const parseArgumentsIntoOptions = (rawArgs) => {
    console.log(rawArgs);

    return {
        name:
            rawArgs[rawArgs.findIndex((x) => x === '-n' || x === '-name') + 1],
    };
};

const { name } = parseArgumentsIntoOptions(process.argv.splice(2));
execSync(`npx nx generate @nx/react:library --name=${name} --bundler=vite --directory=packages/react/ --compiler=swc --importPath=@edwardcoughlan/design-system-${name} --projectNameAndRootFormat=derived --simpleName=true --no-interactive `, { stdio: "inherit" })
execSync(`npx nx generate @nx/react:stories --project=${name} --no-interactive`, { stdio: "inherit" })

