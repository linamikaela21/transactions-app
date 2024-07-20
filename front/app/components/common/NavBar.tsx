import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Avatar,
  Tooltip,
} from "@nextui-org/react";
import { faClose, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAppDispatch } from "../../../redux/hooks";
import { logout } from "../../../redux/features/accountSlice";

interface NavBarProps {
  userName: string;
  accountNumber: string;
}

export const NavBar = ({ userName, accountNumber }: NavBarProps) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => dispatch(logout());

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Avatar
          classNames={{
            base: "bg-gradient-to-br from-secondary-200 to-secondary-600",
            icon: "text-black/80",
          }}
          icon={<FontAwesomeIcon icon={faUser} />}
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <span className="text-xxl text-secondary font-bold">
          {userName} - {accountNumber}
        </span>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Tooltip color="secondary" content="Logout" placement="bottom">
            <Button
              isIconOnly
              as={Link}
              color="secondary"
              href="/"
              radius="full"
              variant="bordered"
              onClick={handleLogout}
            >
              <FontAwesomeIcon icon={faClose} size="lg" />
            </Button>
          </Tooltip>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
