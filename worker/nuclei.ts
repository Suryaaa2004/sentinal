import { exec } from "child_process";

export async function runNuclei(
  domains: string[]
): Promise<any[]> {

  return new Promise((resolve,reject)=>{

    const input =
      domains.join(",");

    exec(

`echo "${domains.join("\n")}" | nuclei -silent -json`,

(error,stdout)=>{

if(error){

reject(error);
return;

}

try{

const results=

stdout
.split("\n")
.filter(Boolean)
.map((line)=>
JSON.parse(line)
);

resolve(results);

}catch{

resolve([]);

}

});

});

}