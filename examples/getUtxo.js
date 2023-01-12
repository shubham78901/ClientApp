
let fetch = require('node-fetch');


    
    let  getTxid=async(address)=>
    {
       let ans;
      let result= await fetch(`https://api.whatsonchain.com/v1/bsv/test/address/${address}/tokens/unspent`);
      result=await result.json();
     

        if(result)
        {
            ans= result.utxos[0].txid;
           return ans;
        }
       
    }




let address="n1PpGvtDvRFkLPvGbCGEYb4C49HR4bjBgs";

 console.log(getTxid(address))


module.exports={getTxid};



