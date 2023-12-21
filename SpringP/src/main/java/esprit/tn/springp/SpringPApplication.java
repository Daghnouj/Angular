package esprit.tn.springp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import esprit.tn.springp.Entities.*;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.util.Date;
//@EnableScheduling
@EntityScan  ("esprit/tn/springp/Entities")
@SpringBootApplication
public class SpringPApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringPApplication.class, args);
       // Etudiant et =new Etudiant(1,"syrine","ghribi",1457,"esprit",new Date());

       // System.out.println(et);
    }

}
