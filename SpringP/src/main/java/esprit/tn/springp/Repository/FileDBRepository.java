package esprit.tn.springp.Repository;

import esprit.tn.springp.Entities.FileDB;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileDBRepository extends JpaRepository<FileDB,String> {
}
