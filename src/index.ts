import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { v4 as uuid } from "uuid";


AppDataSource.initialize().then(async () => {
    const userRepo = AppDataSource.manager.getRepository(User);
    console.log('test insert or update')
    await userRepo
      .createQueryBuilder()
      .insert()
      .values({
          userID: uuid(),
          firstName: "TestFirstName",
          lastName: "TestLastName",
          age: 10,
      })
      .orUpdate(
        ["firstName"],
        ["user_id"],
        {
            skipUpdateIfNoValuesChanged: true,
        },
      ).execute()

}).catch(error => console.log(error))
