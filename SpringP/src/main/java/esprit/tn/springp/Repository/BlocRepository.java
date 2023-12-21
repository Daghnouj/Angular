package esprit.tn.springp.Repository;


import esprit.tn.springp.Entities.Bloc;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlocRepository extends CrudRepository<Bloc,Long> {
    public List<Bloc> findByCapaciteBlocAndNomBloc(long capacite,String name);
}

