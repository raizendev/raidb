var express=require('express');var app=express();app.set('view engine','jade');app.get('/',function(req,res){});var server=app.listen(3000,function(){});
const fs = require('fs')

class DB {
constructor(){

    }

    set(veri, değer){
        if(!veri) throw new TypeError('Veri Girmediniz')
        if(!değer) throw new TypeError('Değer Girmediniz')
    const dosya = JSON.parse(fs.readFileSync('database.json','utf-8'))
    dosya[veri] = değer
    return fs.writeFileSync('database.json',JSON.stringify(dosya, null, 1))
}





fetch(veri){
    if(!veri) throw new TypeError('Veri Girmediniz')
    const dosya = JSON.parse(fs.readFileSync('database.json','utf-8'))
    if (!dosya[veri]) return console.log('Yazdığınız Veri Bulunamadı\n' + __dirname)
    return dosya[veri]

}

has(veri){
    if(!veri) throw new TypeError('Veri Girmediniz')
    const dosya = JSON.parse(fs.readFileSync('database.json','utf-8'))
    return dosya[veri] ? true:false

}

delete(veri){
    if(!veri) throw new TypeError('Veri Girmediniz')
    const dosya = JSON.parse(fs.readFileSync('database.json','utf-8'))
    if (!dosya[veri]) throw new TypeError('Bulunamadı')
    delete dosya[veri]
    return fs.writeFileSync('database.json',JSON.stringify(dosya, null, 2))
}
backup(dosyaAdı){
    if(!dosyaAdı) throw new TypeError('Dosya Adı Girmediniz')
    const dosya = JSON.parse(fs.readFileSync('database.json','utf-8'))
    return fs.writeFileSync('${dosyaAdı}.json',JSON.stringify(dosya, null, 2))
}
}



module.exports = new DB()
