import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import bcrypt from 'bcrypt';
import { query } from '../../../lib/db';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        let { email, password } = credentials;
        const user = await query(`Select * from User WHERE Email="${email}"`);
        if (!user.length) throw new Error('No User Found');

        const isValid = await bcrypt.compare(password, user[0].Password);
        if (!isValid) throw new Error('Invalid Username or Password');
        // console.log(user);
        return {
          image: user[0].UserType,
          name: user[0].UserId,
          email: user[0].Email,
        };
      },
    }),
  ],
});
