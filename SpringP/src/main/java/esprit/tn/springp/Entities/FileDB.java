package esprit.tn.springp.Entities;


import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "files")
public class FileDB {

        @Id
        @GeneratedValue(generator = "uuid")
        @GenericGenerator(name = "uuid", strategy = "uuid2")
        private String id;
        private String name;
        private String type;

    @Lob
    @Column(length = Integer.MAX_VALUE)
//        private byte[] data;
private byte[] data;


    public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }

        public byte[] getData() {
            return data;
        }

        public void setData(byte[] data) {
            this.data = data;
        }



        public FileDB(String name, String type, byte[] data) {
            this.name = name;
            this.type = type;
            this.data = data;
        }

        public FileDB() {
        }



}
