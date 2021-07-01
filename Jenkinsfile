// pipeline {
//     agent {
//         docker {
//             image 'node:14'
//             args '-p 1111:3000'
//         }
//     }
//     //  environment {
//     //         CI = 'true'
//     //     }
//     stages {
//         stage('Build') {
//             steps {
//                 sh 'npm install'
//             }
//         }
//         // stage('Test') {
//         //             steps {
//         //                 sh './jenkins/scripts/test.sh'
//         //             }
//         //         }
//         //         stage('Deliver') {
//         //                     steps {
//         //                         sh './jenkins/scripts/deliver.sh'
//         //                         input message: 'Finished using the web site? (Click "Proceed" to continue)'
//         //                         sh './jenkins/scripts/kill.sh'
//         //                     }
//         //                 }

job('NodeJS example') {
    scm {
        git('https://github.com/pralhad677/dockerwithmongo2.git') {  node -> // is hudson.plugins.git.GitSCM
            node / gitConfigName('Pralhad677')
            node / gitConfigEmail('jPralhadkharel@gmail.com')
        }
    }
    triggers {
        scm('H/5 * * * *')
    }
    wrappers {
        nodejs('nodejs') // this is the name of the NodeJS installation in 
                         // Manage Jenkins -> Configure Tools -> NodeJS Installations -> Name
    }
    steps {
        shell("npm install")
    }
}

  
