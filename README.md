# Chisa [![Build Status](https://travis-ci.org/wayanjimmy/chisa.svg?branch=master)](https://travis-ci.org/wayanjimmy/chisa) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Greenkeeper badge](https://badges.greenkeeper.io/wayanjimmy/chisa.svg)](https://greenkeeper.io/)
Print server berbasis web untuk perangkat lunak minipos

## Spesifikasi
Hanya terdiri dari 1 endpoint `http` dengan method `POST` dan url `/print` yang menerima sebuah content.
Content berupa string akan disimpan dalam file `./storage/logs` dan file tersebut akan dikirim ke printer sesuai pada config.

## Konfigurasi
1. Buatlah file `.env` dari contoh `.env-sample`
2. Edit file `.env` sesuai yang diiinginkan

## Referensi
- [Afas Printer Server oleh Mayu Krisnawan](https://bitbucket.org/mayukrisnawan/afas-printer-server)
