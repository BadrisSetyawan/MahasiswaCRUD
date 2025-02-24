export type RootStackParamList = {
  Dashboard: undefined;
  DetailMahasiswa: {
    item: {
      id: number;
      nim: number;
      nama: string;
      jurusan: string;
      angkatan: number;
      createdAt: string;
    };
  };
  CreateMahasiswa: undefined;
  EditMahasiswa: {
    item: {
      id: number;
      nim: number;
      nama: string;
      jurusan: string;
      angkatan: number;
      updatedAt: string;
    };
  };
};
