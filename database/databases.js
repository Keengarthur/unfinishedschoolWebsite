const {MongoClient} = require('mongodb')

async function main(){

    const uri =  'mongodb+srv://keeng:keeng@keengarthur.sum6w.mongodb.net/student?retryWrites=true&w=majority'
    const client = new MongoClient(uri)

    try{
    
            await client.connect()
            await createStudents(client,{name:'liza'})
    }
    catch(err){
        console.log(err)
    }
    finally{
        await client.close()
    }
}

main().catch(console.error)

async function createStudents(client){
    for (i=1;i<30;i++){

        let studentInfo = {_id:i,
            class:'jss1',
    subject:['maths','physics','geography']}
  const result = await client.db('student').collection('student_information').insert(studentInfo)
   console.log(`new listhing with${result.insertedIds} id`)
    }

}
