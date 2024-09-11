/*
Copyright 2024 DigitalOcean

This code is licensed under the MIT License.
You may obtain a copy of the License at
https://github.com/digitalocean/nginxconfig.io/blob/master/LICENSE or https://mit-license.org/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions :

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

import common from '../../common';

export default {
    downloadTheGeneratedConfig: '<b>دانلود</b> پیکربندی تولید شده:',
    andUploadItToYourServers: 'و آن را به سرورهای خود <b>آپلود</b> کنید',
    directory: 'دایرکتوری.',
    or: 'یا، ',
    copyBase64StringOfCompressedConfig: 'یک رشته base64 از پیکربندی فشرده را کپی کنید',
    pasteItInYourServersCommandLineAndExecute:
        ', آن را در خط فرمان سرور خود <b>پیست</b> کرده و اجرا کنید.',
    navigateToYourNginxConfigurationDirectoryOnYourServer: `به <b>دایرکتوری پیکربندی ${common.nginx}</b> خود در سرورتان بروید:`,
    createABackupOfYourCurrentNginxConfiguration: `<b>پشتیبانی</b> از پیکربندی ${common.nginx} فعلی خود بسازید:`,
    extractTheNewCompressedConfigurationArchiveUsingTar:
        '<b>فایل فشرده پیکربندی جدید را</b> با استفاده از tar <b>استخراج</b> کنید:',
    download: 'دانلود',
};