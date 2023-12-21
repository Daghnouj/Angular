package esprit.tn.springp.Service;

import esprit.tn.springp.Entities.Bloc;
import esprit.tn.springp.Entities.Chambre;
import esprit.tn.springp.Repository.BlocRepository;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Primary
@Service("BlocService")
public class BlocServicelmpl implements BlocService {
    @Autowired
   private BlocRepository blocRepository;

        public List<Bloc> retrieveAllBlocs() {
            return (List<Bloc>)blocRepository.findAll();
        }
        public Bloc retrieveBloc(Long idBloc) {
            return blocRepository.findById(idBloc).get();
        }
        public Bloc addBloc(Bloc c) {
            return blocRepository.save(c);
        }
        public void removeBloc(Long idBloc) {
            blocRepository.deleteById(idBloc);
        }
      /*  public Bloc modifyBloc(Bloc bloc) {
            return blocRepository.save(bloc);*/
        }

