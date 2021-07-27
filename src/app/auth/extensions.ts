import { ToastController } from "@ionic/angular";
import { Md5 } from 'ts-md5/dist/md5';
import * as CryptoJS from 'crypto-js';

export class Extensions {

    private static toastController: ToastController = new ToastController();

    constructor() {
    }

    static async showToast(msg : string){
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000,
            
        });
        toast.present();
    }

    static generateToken(string : string) : string {
        const hash = new Md5();
        hash.appendStr(string);
        return hash.end().toString();
    }

    static encryptedPassword(password : string) : string {
        return CryptoJS.AES.encrypt(password, 'secret-key').toString();
    }

    static decryptedPassword(password : string) : string {
        return CryptoJS.AES.decrypt(password, 'secret-key').toString(CryptoJS.enc.Utf8);

    }

}