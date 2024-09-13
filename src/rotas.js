import alunoController from './controller/turmaController.js'
import matriculaController from './controller/matriculaController.js'

export default function adicionarRotas(servidor){
    servidor.use(alunoController)
    servidor.use(matriculaController)
}
