package esprit.tn.springp.Service;

import esprit.tn.springp.Entities.Bloc;

import java.util.List;

public interface BlocService {
    public List<Bloc> retrieveAllBlocs();
    public Bloc retrieveBloc(Long blocid);
    public Bloc addBloc(Bloc b);
    public void removeBloc(Long blocid);
  //  public Bloc modifyBloc(Bloc bloc);
}


