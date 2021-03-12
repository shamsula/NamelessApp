pipeline {
    agent any

    stages {
        stage("build"){
            steps {
                echo 'start building ...'
                sh 'npm install yarn'
                sh 'yarn install'
                echo 'done building.'
            }
        }

        stage("test"){
            steps {
                echo 'start testing ...'
                sh 'yarn start'
                echo 'done testing.'
            }
        }

        stage("deploy"){
            steps {
                echo 'start deploying...'
                sh 'yarn run build'
                echo 'finished deploying.'
            }
        }
    }
}