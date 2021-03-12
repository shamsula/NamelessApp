pipeline {
    agent any
    triggers { 
        cron('H/15 * * * *') 
        }
    stages {
        stage("build"){
            when {
                expression {
                    BRANCH_NAME != 'master' 
                }
            }
            steps {
                echo 'start building ...'
                sh 'yarn install'
                sh 'yarn start'
                echo 'done building.'
            }
        }

        stage("test"){            
            steps {
                echo 'start testing ...'
                sh 'yarn test --watchAll=false'
                echo 'all tests have pased..'
            }
        }

        stage("deploy"){
            steps {
                echo 'start deploying...'
                // sh 'yarn run build'
                echo 'finished deploying.'
            }
        }
    }
}