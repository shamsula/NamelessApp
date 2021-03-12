pipeline {
    agent any
    triggers { 
        cron('H/15 * * * *') 
        }
    stages {
        stage("build"){
            steps {
                echo 'start building ...'
                sh 'yarn install'
                echo 'done building.'
            }
        }

        stage("test"){
            when {
                expression {
                    BRANCH_NAME == 'dev' || BRANCH_NAME == 'master' 
                }
            }
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