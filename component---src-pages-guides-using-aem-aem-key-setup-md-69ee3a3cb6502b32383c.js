(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7817],{90115:function(e,o,n){"use strict";n.r(o),n.d(o,{_frontmatter:function(){return d},default:function(){return l}});var t=n(22122),r=n(19756),a=(n(15007),n(64983)),i=n(99536),p=["components"],d={},s={_frontmatter:d},u=i.Z;function l(e){var o=e.components,n=(0,r.Z)(e,p);return(0,a.mdx)(u,(0,t.Z)({},s,n,{components:o,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"introduction"},"Introduction"),(0,a.mdx)("p",null,"To secure the calls between Adobe I/O Events and AEM, we leverage a JWT exchange token flow.\nThis flow requires the JWT request to be signed, and therefore, requires private-public keys configurations\n(see our ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/developer-console/docs/guides/authentication/JWT/"},"JWT authentication flow documentation"),"\nfor more details). This documentation details these configurations steps."),(0,a.mdx)("h3",{id:"create-your-publicprivate-key-pair"},"Create your public/private key pair"),(0,a.mdx)("p",null,"To create an RSA private/public certificate pair, use ",(0,a.mdx)("a",{parentName:"p",href:"https://www.openssl.org/docs/manpages.html"},"openssl"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"}," openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout private.key -out certificate_pub.crt\n")),(0,a.mdx)("h3",{id:"upload-your-public-key-in-your-adobe-developer-workspace"},"Upload your public key in your Adobe Developer Workspace"),(0,a.mdx)("p",null,"Upload the public key you generated above (",(0,a.mdx)("inlineCode",{parentName:"p"},"certificate_pub.crt"),") in your Adobe Developer Workspace,\nsee our ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/developer-console/docs/guides/credentials/"},"Adobe Developer Console guide")),(0,a.mdx)("h3",{id:"convert-your-private-key-in-a-simple-base64-encoded-string"},"Convert your private key in a simple base64-encoded String"),(0,a.mdx)("p",null,"First, to convert your private key to a PKCS8 format, use the following command:"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"openssl pkcs8 -topk8 -inform PEM -outform DER -in private.key -nocrypt > private.pkcs8.key")),(0,a.mdx)("p",null,"Then, to base 64 encode it, use the following command:"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"base64 private.pkcs8.key")," "),(0,a.mdx)("p",null,"You will use the resulting (base64 encoded pkcs8 key) string to configure ",(0,a.mdx)("inlineCode",{parentName:"p"},"aem-io-events"),",\nand set its ",(0,a.mdx)("inlineCode",{parentName:"p"},"aio.encoded.pkcs8")," configuration.   "))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-using-aem-aem-key-setup-md-69ee3a3cb6502b32383c.js.map