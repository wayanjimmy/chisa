# Chisa
Print server berbasis web untuk perangkat lunak minipos

## Spesifikasi
Hanya terdiri dari 1 endpoint `http` dengan method `POST` dan url `/print` yang menerima sebuah content.
Content berupa string akan disimpan dalam file `./storage/logs` dan file tersebut akan dikirim ke printer sesuai pada config.

## Konfigurasi
1. Buatlah file `.env` dari contoh `.env-sample`
2. Edit file `.env` sesuai yang diiinginkan

## Referensi
- [Afas Printer Server oleh Mayu Krisnawan](https://bitbucket.org/mayukrisnawan/afas-printer-server)
