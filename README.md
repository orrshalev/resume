My method for generating resumes with variable content by first defining the content in `.ts` files
and then generating LaTeX files.

### Build using Docker

```sh
docker build -t latex .
docker run --rm -i -v "$PWD":/data resume-latex pdflatex orr_shalev_resume.tex
```

### License

Format is MIT but all the data is owned by Orr Shalev.

### Credits

Thank you to [Sourabh Bajaj](https://github.com/sb2nov) creating the original LaTeX template.
