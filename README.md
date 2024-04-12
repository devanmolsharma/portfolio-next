## Instructions

Follow these steps to set up the project locally:

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/devanmolsharma/portfolio-next.git
```

### 2. Build Docker Image

Navigate to the cloned repository directory and build the Docker image using the following command:

```bash
docker build . -t anmol_sharma
```

### 3. Run Docker Container

Once the Docker image is built successfully, run the Docker container using the following command:

```bash
docker run -dp 5575:3000 --name sharma_anmol_coding_assignment14 anmol_sharma
```

### 4. Access the Website

Open your web browser and navigate to the following URL:

```
http://localhost:5575
```

You should now be able to view Anmol Sharma's portfolio website locally.