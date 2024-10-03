<<<<<<< HEAD
import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);

=======
import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount(email, password) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password
      );

      if (userAccount) {
        // call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (e) {
      throw e;
>>>>>>> 2907b88 (Mega project of complex blog)
    }
  }

<<<<<<< HEAD
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
=======
  async login(email, password) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (e) {
      throw e;
>>>>>>> 2907b88 (Mega project of complex blog)
    }
  }

<<<<<<< HEAD
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
=======
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (e) {
      console.log("Appwrite service :: getCurrentUser :: error", e);
>>>>>>> 2907b88 (Mega project of complex blog)
    }
    return null;
  }

<<<<<<< HEAD
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
=======
  async logout() {
    try {
      return await this.account.deleteSessions("current");
    } catch (e) {
      console.log("Appwrite service :: logout :: error", e);
>>>>>>> 2907b88 (Mega project of complex blog)
    }
  }
}

const authService = new AuthService();
<<<<<<< HEAD

export default authService

=======

export default authService;
>>>>>>> 2907b88 (Mega project of complex blog)
